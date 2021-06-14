from pymantic import sparql
server = sparql.SPARQLServer("http://45.79.65.17:8889/bigdata/sparql")


result = server.query('prefix : <http://mynovelcollection.com/> select * where{ ?s ?p ?o} ' )
print(result)



