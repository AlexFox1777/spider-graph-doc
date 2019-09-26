define({ "api": [
  {
    "type": "delete",
    "url": "/api/graphs/${graph_name}/dataset/${dataset_name}",
    "title": "Delete a dataset",
    "name": "DeleteDataset",
    "group": "Datasets",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"the title of the dataset that was deleted\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/datasets/dataset.js",
    "groupTitle": "Datasets"
  },
  {
    "type": "post",
    "url": "/api/graphs/${graph_name}/dataset",
    "title": "Create a new dataset",
    "name": "PostDataset",
    "group": "Datasets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Dataset title</p>"
          },
          {
            "group": "Parameter",
            "type": "points[]",
            "optional": false,
            "field": "points",
            "description": "<p>an array of integers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"title\": \"dataset1\",\n \"points\": [2,3,5]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/datasets/dataset.js",
    "groupTitle": "Datasets"
  },
  {
    "type": "put",
    "url": "/api/graphs/${graph_name}/dataset/${dataset_name}",
    "title": "Update a dataset",
    "name": "UpdateDataset",
    "group": "Datasets",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"dataset1\",\n  \"points\": [2,3,5]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"updated_name\",\n  \"points\": [2,3,5]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/datasets/dataset.js",
    "groupTitle": "Datasets"
  },
  {
    "type": "delete",
    "url": "/api/graphs/${name}",
    "title": "Delete a graph",
    "name": "DeleteGraph",
    "group": "Graphs",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"the name of the graph that was deleted\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/graphs/graphs.js",
    "groupTitle": "Graphs"
  },
  {
    "type": "get",
    "url": "/api/graphs/${name}",
    "title": "Get a graph",
    "name": "GetGraph",
    "group": "Graphs",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n[\n{\n \"name\": \"Make tea1\",\n  \"legs\": [\n   \"leg1\",\n    \"leg1\",\n    \"leg2\"\n  ],\n  \"datasets\": [\n    {\n      \"name\": \"dataset1\",\n      \"points\": [\n        2,\n        3,\n        5\n      ]\n    }\n  ]\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/graphs/graphs.js",
    "groupTitle": "Graphs"
  },
  {
    "type": "get",
    "url": "/api/graphs/",
    "title": "Get all graphs",
    "name": "GetGraphs",
    "group": "Graphs",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n[\n {\n   \"id\": 10,\n   \"name\": \"my graph3\",\n   \"user_id\": 11\n },\n {\n   \"id\": 12,\n   \"name\": \"Make tea1\",\n   \"user_id\": 11\n },\n {\n   \"id\": 13,\n   \"name\": \"Make tea12\",\n   \"user_id\": 11\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/graphs/graphs.js",
    "groupTitle": "Graphs"
  },
  {
    "type": "post",
    "url": "/api/graphs/",
    "title": "Create a new empty graph",
    "name": "PostGraph",
    "group": "Graphs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Graph name</p>"
          },
          {
            "group": "Parameter",
            "type": "legs[]",
            "optional": false,
            "field": "legs",
            "description": "<p>an array of strings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"name\": \"Name of the graph\",\n \"legs\": [\"leg1\", \"leg1\", \"leg2\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/graphs/graphs.js",
    "groupTitle": "Graphs"
  },
  {
    "type": "put",
    "url": "/api/graphs/${name}",
    "title": "Update a graph",
    "name": "UpdateGraph",
    "group": "Graphs",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Make tea12\",\n  \"legs\": [\"leg1\", \"leg1\", \"leg2\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"updated name\",\n  \"legs\": [\"updatedLeg1\", \"leg1\", \"leg2\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/graphs/graphs.js",
    "groupTitle": "Graphs"
  }
] });
