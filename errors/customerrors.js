

exports.handleCustomErrors = (err, req, res, next) => {
      
    if (err.status && err.msg) {
      res.status(err.status).send({msg: {msg: `${err.msg}`}});
    } else next(err);
  };