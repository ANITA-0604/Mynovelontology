from pymantic import sparql

def search(person, relation):
    server = sparql.SPARQLServer("http://173.230.152.120:8889/bigdata/sparql")
    result = server.query(
        'prefix : <http://mynovelcollection.com/> select ?n where { ?s a :Novel_character; :name "'+person+'"; :'+relation+' ?e .  ?e a :Novel_character ; :name ?n }')
    print(type(result['results']['bindings']))
    result = result['results']['bindings']
    return result
