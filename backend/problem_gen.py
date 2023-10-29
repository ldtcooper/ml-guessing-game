from typing import Tuple, Dict, Union, List, Any
from random import randint, choice, uniform, seed
from time import time

import numpy as np

from sklearn.datasets import make_classification, make_gaussian_quantiles, make_moons
from sklearn.ensemble import AdaBoostClassifier
from sklearn.linear_model import LogisticRegressionCV
from sklearn.model_selection import train_test_split
from sklearn.inspection import DecisionBoundaryDisplay
from sklearn.base import BaseEstimator
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import MinMaxScaler
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier

import mpld3

HyperparamValue = Union[str, int, float, None]

ALGO_CHOICES = [
    ("AdaBoost (Boosted Trees)", AdaBoostClassifier),
    ("Decision Tree", DecisionTreeClassifier),
    ("Logistic Regression", LogisticRegressionCV),
    ("Polynomial Kernel Support Vector Machine", SVC),
    ("RBF Kernel Support Vector Machine", SVC),
    ("Linear Feed-Forward Neural Net", MLPClassifier),
    ("Non-Linear Feed-Forward Neural Net", MLPClassifier),
    ("Naive Bayes", GaussianNB),
    ("K-Nearest-Neighbors", KNeighborsClassifier)
]


class Problem():
    def __init__(self) -> None:
        self.classes = randint(2, 4)
        self.algo, self.model = self.choose_algo()
        print(self.algo)
        self.hyperparams = self.choose_hyperparams()
        self.X_train, self.X_test, self.y_train, self.y_test = self.generate_data()
        self.model = self.train_model()

    def choose_data_generator(self) -> Tuple[callable, Dict[str, Any]]:
        DATA_GENERATORS = [
            (make_classification, {
                'n_features': 2,
                'n_informative': 2,
                'n_redundant': 0,
                'n_repeated': 0,
                'n_clusters_per_class': 1,
                'n_classes': self.classes
            }),
            (make_moons, {
                'noise': uniform(0, 1)
            }),
            (
                make_gaussian_quantiles,
                {
                    'n_features': 2,
                    'n_classes': self.classes
                }
            )
        ]

        return choice(DATA_GENERATORS)

    def generate_data(self) -> Tuple[np.ndarray]:
        generator, arguments = self.choose_data_generator()
        X, y = generator(
            n_samples=1000,
            **arguments
        )
        X = MinMaxScaler().fit_transform(X)

        return train_test_split(X, y, train_size=0.8)

    def choose_algo(self) -> Tuple[str, BaseEstimator]:
        return choice(ALGO_CHOICES)

    def choose_hyperparams(self) -> Dict[str, HyperparamValue]:
        HYPERPARAMS = {
            "AdaBoost (Boosted Trees)": {},
            "Decision Tree": {
                "criterion": ["gini", "entropy", "log_loss"],
                # "max_depth": [1, 2, 3, None]
            },
            "Logistic Regression": {
                "penalty": ['l1', 'l2'],
                "solver": ["saga"],
                "multi_class": ['ovr'],
            },
            "Polynomial Kernel Support Vector Machine": {
                "kernel": ["poly"],
                "degree": [2, 3, 4, 5],
            },
            "RBF Kernel Support Vector Machine": {
                "kernel": ["rbf"],
            },
            "Linear Feed-Forward Neural Net": {
                "activation": ["identity"],
                "hidden_layer_sizes": [(8, 8), (8, 8, 8), (16, 16), (16)],
                "learning_rate": ["adaptive"]
            },
            "Non-Linear Feed-Forward Neural Net": {
                "activation": ["tanh", "relu"],
                "hidden_layer_sizes": [(8, 8), (8, 8, 8), (16, 16), (16)],
                "learning_rate": ["adaptive"]
            },
            "Naive Bayes": {},
            "K-Nearest-Neighbors": {
                "n_neighbors": [1, 2, 3, 4, 5, 10, 15],
                "weights": ["uniform", "distance"]
            },
        }

        hyperparams_set = HYPERPARAMS[self.algo]
        return {k: choice(hyperparams_set[k]) for k in hyperparams_set.keys()}

    def train_model(self) -> BaseEstimator:
        return self.model(**self.hyperparams).fit(self.X_train, self.y_train)

    def make_decision_plot(self) -> str:
        disp = DecisionBoundaryDisplay.from_estimator(
            estimator=self.model,
            X=self.X_train,
            alpha=0.5,
            xlabel="Feature One",
            ylabel="Feature Two",
            eps=0.11,
            response_method='predict'
        )
        disp.ax_.scatter(
            self.X_test[:, 0], self.X_test[:, 1], c=self.y_test, edgecolors='k')
        return mpld3.fig_to_dict(fig=disp.figure_)

    def get_table_data(self) -> Tuple[str]:
        return (self.algo, self.hyperparams)

    @classmethod
    def get_answer_options(cls) -> List[str]:
        return [el[0] for el in ALGO_CHOICES]
