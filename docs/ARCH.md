# Architecture

> [!WARNING]
> The graph belows represents an early representation of architecture of the project. It's not updated to the current implementation.

DB par service

```mermaid
mindmap
  root((API Gateway))
    (Nginx)
        (Frontend)
    (DB Users)
    (Gestionnaire de fichiers)
        (DB Liens entre objets)
        (DB Objets)
    (Messagerie)
        (DB Messages)
    (Exercices)
    (Intelligence Artificielle)
        (DB Indexation)
    (Grafana)
       (Prometheus)
```

DB rassemblées ?

```mermaid
mindmap
  root((API Gateway))
    (Nginx)
        (Frontend)
    (DB Users-Messages-Liens)
    (Gestionnaire de fichiers)
        (DB Objets)
    (Messagerie)
    (Exercices)
    (Intelligence Artificielle)
        (DB Indexation)
    (Grafana)
       (Prometheus)
```
