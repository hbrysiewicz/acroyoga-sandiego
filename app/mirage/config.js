function getMany(typeKey, db) {
  return {
    data: db[typeKey].map((attrs) => {
      let rec = {
        type: typeKey,
        id: attrs.id,
        attributes: attrs
      };
      return rec;
    })
  };
}

function get(typeKey, db, req) {
  let id = req.params.id;

  return {
    data: {
      type: typeKey,
      id: id,
      attributes: db[typeKey].find(id)
    }
  };
}

export default function() {
  this.get('/posts', getMany.bind(this, 'posts', ...arguments));
  this.get('/posts/:id', get.bind(this, 'posts', ...arguments));
  this.get('/events', getMany.bind(this, 'events', ...arguments));
  this.get('/events/:id', get.bind(this, 'events', ...arguments));
}
