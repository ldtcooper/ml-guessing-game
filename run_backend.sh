conda deactivate base;
source env/bin/activate;
cd backend/;
sudo service postgresql start;
flask run;