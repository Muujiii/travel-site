exports.handler = function (event, context, callback) {
  const secretContent = `
  <h3>* Хэрэглэгчдийн хуудсанд тавтай морилно уу! *</h3>
  <p> Зөвхөн бүртгэлтэй хэрэглэгчдэд зориулсан <strong>хаалттай контентүүд.</strong><p>
  `;

  let body;

  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.password == "JavaScript") {
    callback(null, {
      statusCode: 200,
      body: secretContent,
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
};
