const generateKeyWord = require("../Helpers/keyWordGenerator");

class matchHandler {
  // create a match
  static async add(moderatorId) {
    // get key word
    let keyWord = generateKeyWord(10);
    
    // call create command
    const result = await this.create({
      keyWord: keyWord,
      moderatorId: moderatorId
    });

    return { result };
  }

  // add players

  // add movements
}

module.exports = matchHandler;
