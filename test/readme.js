/***
 * @license
 * https://github.com/bitcoincashjs/bchaddr
 * Copyright (c) 2018 Emilio Almansi
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */

var assert = require('chai').assert
var bchaddr = require('..')

describe('Readme examples', function () {
  it('should work exactly as advertised', function () {
    var Format = bchaddr.Format
    var Network = bchaddr.Network
    var Type = bchaddr.Type
    var isLegacyAddress = bchaddr.isLegacyAddress
    // var isBitpayAddress = bchaddr.isBitpayAddress
    var isCashAddress = bchaddr.isCashAddress
    var isMainnetAddress = bchaddr.isMainnetAddress
    var isTestnetAddress = bchaddr.isTestnetAddress
    var isP2PKHAddress = bchaddr.isP2PKHAddress
    var isP2SHAddress = bchaddr.isP2SHAddress
    var detectAddressFormat = bchaddr.detectAddressFormat
    var detectAddressNetwork = bchaddr.detectAddressNetwork
    var detectAddressType = bchaddr.detectAddressType
    // var toLegacyAddress = bchaddr.toLegacyAddress
    // var toBitpayAddress = bchaddr.toBitpayAddress
    // var toCashAddress = bchaddr.toCashAddress
    assert.strictEqual(
      isLegacyAddress('s1XMDbagKV6t7iMiv1xBbTWnri3VaEQuqwu'),
      true
    )
    assert.strictEqual(
      isLegacyAddress('qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk'),
      false
    )
    assert.strictEqual(
      isMainnetAddress('s1XMDbagKV6t7iMiv1xBbTWnri3VaEQuqwu'),
      true
    )
    assert.strictEqual(
      isCashAddress('qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk'),
      true
    )
    assert.strictEqual(
      isTestnetAddress('tmKrpi46D7k7nd1zqD6TE9EetwfgE2sHgcs'),
      true
    )
    assert.strictEqual(
      isTestnetAddress('s1XMDbagKV6t7iMiv1xBbTWnri3VaEQuqwu'),
      false
    )
    assert.strictEqual(
      isP2PKHAddress('s1UH4JffKMCDrgWhnutuwUECXNZvsJ8A4dn'),
      true
    )
    assert.strictEqual(
      isP2PKHAddress('s3Y3EX8Am31CVoXRM93rBt99nrZnHjCmRkf'),
      false
    )
    assert.strictEqual(
      isP2SHAddress('s3Uy5ED9ku6YEmgQE2zaXtrZTX6DatCdTcn'),
      true
    )
    assert.strictEqual(
      isP2SHAddress('s1UH4JffKMCDrgWhnutuwUECXNZvsJ8A4dn'),
      false
    )
    assert.strictEqual(
      detectAddressFormat('qqdcsl6c879esyxyacmz7g6vtzwjjwtznsggspc457'),
      Format.Cashaddr
    )
    assert.strictEqual(
      detectAddressNetwork('s1XMDbagKV6t7iMiv1xBbTWnri3VaEQuqwu'),
      Network.Mainnet
    )
    assert.strictEqual(
      detectAddressNetwork('qqdcsl6c879esyxyacmz7g6vtzwjjwtznsggspc457'),
      Network.Testnet
    )
    assert.strictEqual(
      detectAddressType('s1XMDbagKV6t7iMiv1xBbTWnri3VaEQuqwu'),
      Type.P2PKH
    )
    assert.strictEqual(
      detectAddressType('s3Uy5ED9ku6YEmgQE2zaXtrZTX6DatCdTcn'),
      Type.P2SH
    )
  })
})
