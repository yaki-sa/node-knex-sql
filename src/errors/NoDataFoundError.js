module.exports = class NoDataFoundException extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
};
