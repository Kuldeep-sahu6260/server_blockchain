// https://eth-ropsten.alchemyapi.io/v2/TN1i1zDg6RbmfQ0Z31dAXO-9c2YKfa9d

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks : {
    ropsten:{
      url : `https://eth-ropsten.alchemyapi.io/v2/TN1i1zDg6RbmfQ0Z31dAXO-9c2YKfa9d`,
      accounts : [`e6502811589d1bdecfae7ec7984059369cc4a7184ac5f618220a277f795af0ae`]
    }
  }
}
