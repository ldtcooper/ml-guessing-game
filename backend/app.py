from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from problem_gen import Problem
from dotenv import load_dotenv
import os
from utils import build_postgres_uri
from datetime import datetime, timedelta

load_dotenv()
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = build_postgres_uri(
    user=os.getenv('POSTGRES_USER'),
    password=os.getenv('POSTGRES_PASS'),
    location='localhost'
)

db = SQLAlchemy(app)


class Games(db.Model):
    id = db.Column('game_id', db.Integer, primary_key=True)
    algo = db.Column(db.String(50))
    meta = db.Column(db.JSON())
    created = db.Column(db.DateTime())

    def __init__(self, algo, meta):
        self.algo = algo
        self.meta = meta
        self.created = datetime.now()

    def __repr__(self):
        return f'Game {id}: {self.algo} -- {self.meta} -- Created: {self.created}'


with app.app_context():
    db.create_all()


@app.route("/", methods=['GET'])
def hello_world():
    return "<h1>Hello World!</h1>"


@app.route("/problem", methods=['GET'])
def get_problem_graph():
    p = Problem()
    game = Games(*p.get_table_data())
    db.session.add(game)
    db.session.commit()
    return {"graph": p.make_decision_plot(), "id": game.id}


@app.route('/check', methods=['POST'])
def check_solution():
    '''Takes request of form {id: int, algo: str} and returns whether that is correct'''
    data = request.get_json()
    g = db.session.query(Games).get(data["id"])
    resp = {"correct": data['algo'] == g.algo, "answer": g.algo}
    return resp


@app.route('/answers', methods=['GET'])
def get_answer_options():
    return Problem.get_answer_options()


@app.route('/delete', methods=['DELETE'])
def delete_question():
    data = request.get_json()

    # deletes both last game and stale games
    g = db.session.query(Games).get(data["id"])
    els_to_delete = db.session.query(Games).filter(
        Games.created <= (datetime.now() - timedelta(hours=24))).all()
    els_to_delete.append(g)

    for el in els_to_delete:
        db.session.delete(el)

    db.session.commit()

    return {"deleted": data["id"]}


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
