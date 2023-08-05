from flask import Flask
from problem_gen import Problem

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<h1>Hello World!</h1>"


@app.route("/problem")
def get_problem_graph():
    p = Problem()
    return p.make_decision_plot()
