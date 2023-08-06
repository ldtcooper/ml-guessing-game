def build_postgres_uri(user: str, password: str, location: str, port: str = '5432') -> str:
    return f'postgresql://{user}:{password}@{location}:{port}/mlguess'
