/***
 * @license
 * https://github.com/bitcoincashjs/bchaddr
 * Copyright (c) 2018 Emilio Almansi
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */

var assert = require('chai').assert
var bchaddr = require('..')

describe('bchaddr', function () {
  var LEGACY_MAINNET_P2PKH_ADDRESSES = [
    's1XMDbagKV6t7iMiv1xBbTWnri3VaEQuqwu',
    's1UH4JffKMCDrgWhnutuwUECXNZvsJ8A4dn',
    's1agbzN9scQVqEyEv5n4hH1XSh8V9bwhPgb'
  ]

  var LEGACY_MAINNET_P2SH_ADDRESSES = [
    's3Y3EX8Am31CVoXRM93rBt99nrZnHjCmRkf',
    's3Uy5ED9ku6YEmgQE2zaXtrZTX6DatCdTcn',
    's3bNcuueKAJpDL8wMCsjHhdtNqemsBFazWk'
  ]

  var LEGACY_TESTNET_P2PKH_ADDRESSES = [
    'tmKrpi46D7k7nd1zqD6TE9EetwfgE2sHgcs',
    'tmGnfR95CyqTXbAyi73Ba9x4ZcC7X7jErWM',
    'tmPCD6qZmF3jW9dWqGvLKxjPUvkfoXVuWoH'
  ]

  var LEGACY_TESTNET_P2SH_ADDRESSES = [
    't2GhHMSCP9SY37e5ZbCp8FpXibh7J3g3vCm',
    't2Dd84XBP1Xsn5o4SV9YUGXwPGDYb2T6L6R',
    't2L2fkDfwGk9keFbZf2hE5KGJan6sPt52d8'
  ]
  /*
  var BITPAY_MAINNET_P2PKH_ADDRESSES = [
    'CScMwvXjdooDnGevHgfHjGWFi9cjk75Aaj',
    'CPYCf1WjVu8xkRdoBdPdjyuvNg42oA7g3o',
    'CVwkLi1Hm7QwJtAvMWYPYmEqhEcK4KW3my'
  ]

  var BITPAY_MAINNET_P2SH_ADDRESSES = [
    'HGfbmE7C9yMjbUKxaif7YmmhGCi4FN8hzH',
    'HDbSUK6C24hUZdJqUfPTZVBMvj9MGEzYSY',
    'HKzzA1akHGyT85qxeYYDNGWHFHhddvQabB'
  ]

  var BITPAY_TESTNET_P2PKH_ADDRESSES = [
    'mqfRfwGeZnFwfFE7KWJjyg6Yx212iGi6Fi',
    'mnbGP2FeRsbgdQCzDT35zPWDcYSKm4wrcg',
    'mtzp4ikCh5sfBrk7PLBqoAq8w6zc48PsGn'
  ]

  var BITPAY_TESTNET_P2SH_ADDRESSES = [
    '2N3PhNAc8v7eRB65UQAcqCLERStuD93JXLD',
    '2MzKY5Fb8nCzA9F4MJ7MBD3e67RLWFE1ciP',
    '2N6j5kx5h3RG8hhbUTzVw1py1RytnZNYoXo'
  ]
*/
  var CASHADDR_MAINNET_P2PKH_ADDRESSES = [
    'bitcoincash:qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk',
    'bitcoincash:qpxenfpcf975gxdjmq9pk3xm6hjmfj6re56t60smsm',
    'bitcoincash:qzfau6vrq980qntgp5e7l6cpfsf7jw88c5u7y85qx6'
  ]

  var CASHADDR_MAINNET_P2SH_ADDRESSES = [
    'bitcoincash:pph5kuz78czq00e3t85ugpgd7xmer5kr7crv8a2z4t',
    'bitcoincash:ppxenfpcf975gxdjmq9pk3xm6hjmfj6re5dw8qhctx',
    'bitcoincash:pzfau6vrq980qntgp5e7l6cpfsf7jw88c5tmegnra8'
  ]

  var CASHADDR_TESTNET_P2PKH_ADDRESSES = [
    'bchtest:qph5kuz78czq00e3t85ugpgd7xmer5kr7csm740kf2',
    'bchtest:qpxenfpcf975gxdjmq9pk3xm6hjmfj6re57e7gjvh8',
    'bchtest:qzfau6vrq980qntgp5e7l6cpfsf7jw88c5cvqqkhpx'
  ]

  var CASHADDR_TESTNET_P2SH_ADDRESSES = [
    'bchtest:pph5kuz78czq00e3t85ugpgd7xmer5kr7c87r6g4jh',
    'bchtest:ppxenfpcf975gxdjmq9pk3xm6hjmfj6re5fur840v6',
    'bchtest:pzfau6vrq980qntgp5e7l6cpfsf7jw88c50fa0356m'
  ]

  var SLPADDR_MAINNET_P2PKH_ADDRESSES = [
    'tt:qph5kuz78czq00e3t85ugpgd7xmer5kr7csklfy0jp',
    'tt:qpxenfpcf975gxdjmq9pk3xm6hjmfj6re575l5e4vv',
    'tt:qzfau6vrq980qntgp5e7l6cpfsf7jw88c5cppuaw6d'
  ]

  var SLPADDR_MAINNET_P2SH_ADDRESSES = [
    'tt:pph5kuz78czq00e3t85ugpgd7xmer5kr7c8nzxrvfu',
    'tt:ppxenfpcf975gxdjmq9pk3xm6hjmfj6re5f3zm7kh3',
    'tt:pzfau6vrq980qntgp5e7l6cpfsf7jw88c50yun6dps'
  ]

  var SLPADDR_TESTNET_P2PKH_ADDRESSES = [
    'ttest:qph5kuz78czq00e3t85ugpgd7xmer5kr7cv0c3wsgz',
    'ttest:qpxenfpcf975gxdjmq9pk3xm6hjmfj6re5zdcvn2k0',
    'ttest:qzfau6vrq980qntgp5e7l6cpfsf7jw88c5ycxyh3qw'
  ]

  var SLPADDR_TESTNET_P2SH_ADDRESSES = [
    'ttest:pph5kuz78czq00e3t85ugpgd7xmer5kr7cm297fnnl',
    'ttest:ppxenfpcf975gxdjmq9pk3xm6hjmfj6re54g9r5fdj',
    'ttest:pzfau6vrq980qntgp5e7l6cpfsf7jw88c5namtsjmn'
  ]

  var LEGACY_ADDRESSES = flatten([
    LEGACY_MAINNET_P2PKH_ADDRESSES,
    LEGACY_MAINNET_P2SH_ADDRESSES,
    LEGACY_TESTNET_P2PKH_ADDRESSES,
    LEGACY_TESTNET_P2SH_ADDRESSES
  ])

  /*
  var BITPAY_MAINNET_ADDRESSES = flatten([
    BITPAY_MAINNET_P2PKH_ADDRESSES,
    BITPAY_MAINNET_P2SH_ADDRESSES
  ])

  var BITPAY_ADDRESSES = flatten([
    BITPAY_MAINNET_ADDRESSES,
    BITPAY_TESTNET_P2PKH_ADDRESSES,
    BITPAY_TESTNET_P2SH_ADDRESSES
  ])
*/

  var CASHADDR_ADDRESSES = flatten([
    CASHADDR_MAINNET_P2PKH_ADDRESSES,
    CASHADDR_MAINNET_P2SH_ADDRESSES,
    CASHADDR_TESTNET_P2PKH_ADDRESSES,
    CASHADDR_TESTNET_P2SH_ADDRESSES
  ])

  var SLPADDR_ADDRESSES = flatten([
    SLPADDR_MAINNET_P2PKH_ADDRESSES,
    SLPADDR_MAINNET_P2SH_ADDRESSES,
    SLPADDR_TESTNET_P2PKH_ADDRESSES,
    SLPADDR_TESTNET_P2SH_ADDRESSES
  ])

  var CASHADDR_ADDRESSES_NO_PREFIX = CASHADDR_ADDRESSES.map(function (address) {
    var parts = address.split(':')
    return parts[1]
  })

  var SLPADDR_ADDRESSES_NO_PREFIX = CASHADDR_ADDRESSES.map(function (address) {
    var parts = address.split(':')
    return parts[1]
  })

  var MAINNET_ADDRESSES = flatten([
    LEGACY_MAINNET_P2PKH_ADDRESSES,
    LEGACY_MAINNET_P2SH_ADDRESSES,
    //  BITPAY_MAINNET_P2PKH_ADDRESSES,
    //  BITPAY_MAINNET_P2SH_ADDRESSES,
    CASHADDR_MAINNET_P2PKH_ADDRESSES,
    CASHADDR_MAINNET_P2SH_ADDRESSES
  ])

  var TESTNET_ADDRESSES = flatten([
    LEGACY_TESTNET_P2PKH_ADDRESSES,
    LEGACY_TESTNET_P2SH_ADDRESSES,
    //  BITPAY_TESTNET_P2PKH_ADDRESSES,
    //  BITPAY_TESTNET_P2SH_ADDRESSES,
    CASHADDR_TESTNET_P2PKH_ADDRESSES,
    CASHADDR_TESTNET_P2SH_ADDRESSES
  ])

  var P2PKH_ADDRESSES = flatten([
    LEGACY_MAINNET_P2PKH_ADDRESSES,
    LEGACY_TESTNET_P2PKH_ADDRESSES,
    //  BITPAY_MAINNET_P2PKH_ADDRESSES,
    //  BITPAY_TESTNET_P2PKH_ADDRESSES,
    CASHADDR_MAINNET_P2PKH_ADDRESSES,
    CASHADDR_TESTNET_P2PKH_ADDRESSES
  ])

  var P2SH_ADDRESSES = flatten([
    LEGACY_MAINNET_P2SH_ADDRESSES,
    LEGACY_TESTNET_P2SH_ADDRESSES,
    //  BITPAY_MAINNET_P2SH_ADDRESSES,
    //  BITPAY_TESTNET_P2SH_ADDRESSES,
    CASHADDR_MAINNET_P2SH_ADDRESSES,
    CASHADDR_TESTNET_P2SH_ADDRESSES
  ])

  function flatten (arrays) {
    return [].concat.apply([], arrays)
  }

  describe('#detectAddressFormat()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.detectAddressFormat()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.detectAddressFormat('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.detectAddressFormat('st1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('it should detect a legacy address\' format correctly', function () {
      LEGACY_ADDRESSES.forEach(function (address) {
        assert.strictEqual(bchaddr.detectAddressFormat(address), bchaddr.Format.Legacy)
      })
    })
    it('it should detect a cashaddr address\' format correctly', function () {
      CASHADDR_ADDRESSES.forEach(function (address) {
        assert.strictEqual(bchaddr.detectAddressFormat(address), bchaddr.Format.Cashaddr)
      })
    })
  })

  describe('#detectAddressNetwork()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.detectAddressNetwork()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.detectAddressNetwork('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.detectAddressNetwork('t1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('it should detect a mainnet address\' network correctly', function () {
      MAINNET_ADDRESSES.forEach(function (address) {
        assert.strictEqual(bchaddr.detectAddressNetwork(address), bchaddr.Network.Mainnet)
      })
    })
    it('it should detect a testnet address\' network correctly', function () {
      TESTNET_ADDRESSES.forEach(function (address) {
        assert.strictEqual(bchaddr.detectAddressNetwork(address), bchaddr.Network.Testnet)
      })
    })
  })

  describe('#detectAddressType()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.detectAddressType()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.detectAddressType('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.detectAddressType('somt1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should detect a P2PKH address\' type correctly', function () {
      P2PKH_ADDRESSES.forEach(function (address) {
        assert.strictEqual(bchaddr.detectAddressType(address), bchaddr.Type.P2PKH)
      })
    })
    it('should detect a P2SH address\' type correctly', function () {
      P2SH_ADDRESSES.forEach(function (address) {
        assert.strictEqual(bchaddr.detectAddressType(address), bchaddr.Type.P2SH)
      })
    })
  })

  describe('#toLegacyAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.toLegacyAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.toLegacyAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.toLegacyAddress('some t1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should translate legacy address format to itself correctly', function () {
      assert.deepEqual(
        LEGACY_ADDRESSES.map(bchaddr.toLegacyAddress),
        LEGACY_ADDRESSES
      )
    })
    /* it('should translate bitpay address format to legacy format correctly', function () {
      assert.deepEqual(
        BITPAY_ADDRESSES.map(bchaddr.toLegacyAddress),
        LEGACY_ADDRESSES
      )
    }) */
    it('should translate cashaddr address format to legacy format correctly', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES.map(bchaddr.toLegacyAddress),
        LEGACY_ADDRESSES
      )
    })
  })

  describe('#toBitpayAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.toBitpayAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.toBitpayAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.toBitpayAddress('some t1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })

    /* it('should translate legacy address format to bitpay format correctly', function () {
      assert.deepEqual(
        LEGACY_ADDRESSES.map(bchaddr.toBitpayAddress),
        BITPAY_ADDRESSES
      )
    })
    it('should translate bitpay address format to itself correctly', function () {
      assert.deepEqual(
        BITPAY_ADDRESSES.map(bchaddr.toBitpayAddress),
        BITPAY_ADDRESSES
      )
    })
    it('should translate cashaddr address format to bitpay format correctly', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES.map(bchaddr.toBitpayAddress),
        BITPAY_ADDRESSES
      )
    })  */
  })

  /*  describe('#toCashAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.toCashAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.toCashAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.toCashAddress('some int1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should translate legacy address format to cashaddr format correctly', function () {
      assert.deepEqual(
        LEGACY_ADDRESSES.map(bchaddr.toCashAddress),
        CASHADDR_ADDRESSES
      )
    })
    it('should translate bitpay address format to cashaddr format correctly', function () {
      assert.deepEqual(
        BITPAY_ADDRESSES.map(bchaddr.toCashAddress),
        CASHADDR_ADDRESSES
      )
    })
    it('should translate cashaddr address format to itself correctly', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES.map(bchaddr.toCashAddress),
        CASHADDR_ADDRESSES
      )
    })
    it('should translate no-prefix cashaddr address format to itself correctly', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.toCashAddress),
        CASHADDR_ADDRESSES
      )
    })
  }) */

  describe('#toSlpAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.toSlpAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.toSlpAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.toSlpAddress('some int1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should translate legacy address format to slpaddr format correctly', function () {
      assert.deepEqual(
        LEGACY_ADDRESSES.map(bchaddr.toSlpAddress),
        SLPADDR_ADDRESSES
      )
    })
    /* it('should translate bitpay address format to slpaddr format correctly', function () {
      assert.deepEqual(
        BITPAY_ADDRESSES.map(bchaddr.toSlpAddress),
        SLPADDR_ADDRESSES
      )
    }) */
    it('should translate cashaddr address format to itself correctly', function () {
      assert.deepEqual(
        SLPADDR_ADDRESSES.map(bchaddr.toSlpAddress),
        SLPADDR_ADDRESSES
      )
    })
    it('should translate no-prefix slpaddr address format to itself correctly', function () {
      assert.deepEqual(
        SLPADDR_ADDRESSES_NO_PREFIX.map(bchaddr.toSlpAddress),
        SLPADDR_ADDRESSES
      )
    })
  })

  describe('#isLegacyAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.isLegacyAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isLegacyAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isLegacyAddress('some t1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should return true for a legacy address', function () {
      LEGACY_ADDRESSES.forEach(function (address) {
        assert.isTrue(bchaddr.isLegacyAddress(address))
      })
    })
    /* it('should return false for a bitpay address', function () {
      BITPAY_MAINNET_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isLegacyAddress(address))
      })
    }) */
    it('should return false for a cashaddr address', function () {
      CASHADDR_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isLegacyAddress(address))
      })
    })
    it('should return false for a slpaddr address', function () {
      SLPADDR_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isBitpayAddress(address))
      })
    })
  })

  describe('#isBitpayAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.isBitpayAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isBitpayAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isBitpayAddress('some t1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should return false for a legacy address', function () {
      LEGACY_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isBitpayAddress(address))
      })
    })
    /* it('should return true for a bitpay address', function () {
      BITPAY_MAINNET_ADDRESSES.forEach(function (address) {
        assert.isTrue(bchaddr.isBitpayAddress(address))
      })
    }) */
    it('should return false for a cashaddr address', function () {
      CASHADDR_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isBitpayAddress(address))
      })
    })
    it('should return false for a slpaddr address', function () {
      SLPADDR_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isBitpayAddress(address))
      })
    })
  })

  describe('#isCashAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.isCashAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isCashAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isCashAddress('some int1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should return false for a legacy address', function () {
      LEGACY_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isCashAddress(address))
      })
    })
    /* it('should return false for a bitpay address', function () {
      BITPAY_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isCashAddress(address))
      })
    }) */
    it('should return false for a slpaddr address', function () {
      SLPADDR_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isCashAddress(address))
      })
    })
    it('should return true for a cashaddr address', function () {
      CASHADDR_ADDRESSES.forEach(function (address) {
        assert.isTrue(bchaddr.isCashAddress(address))
      })
    })
  })

  describe('#isSlpAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.isSlpAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isSlpAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isSlpAddress('some int1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should return false for a legacy address', function () {
      LEGACY_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isSlpAddress(address))
      })
    })
    /* it('should return false for a bitpay address', function () {
      BITPAY_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isSlpAddress(address))
      })
    }) */
    it('should return false for a cashaddr address', function () {
      CASHADDR_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isSlpAddress(address))
      })
    })
    it('should return true for a slpaddr address', function () {
      SLPADDR_ADDRESSES.forEach(function (address) {
        assert.isTrue(bchaddr.isSlpAddress(address))
      })
    })
  })

  describe('#isMainnetAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.isMainnetAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isMainnetAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isMainnetAddress('somet1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should return true for a mainnet address', function () {
      MAINNET_ADDRESSES.forEach(function (address) {
        assert.isTrue(bchaddr.isMainnetAddress(address))
      })
    })
    it('should return false for a testnet address', function () {
      TESTNET_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isMainnetAddress(address))
      })
    })
  })

  describe('#isTestnetAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.isTestnetAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isTestnetAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isTestnetAddress('somet1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should return false for a mainnet address', function () {
      MAINNET_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isTestnetAddress(address))
      })
    })
    it('should return true for a testnet address', function () {
      TESTNET_ADDRESSES.forEach(function (address) {
        assert.isTrue(bchaddr.isTestnetAddress(address))
      })
    })
  })

  describe('#isP2PKHAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.isP2PKHAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isP2PKHAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isP2PKHAddress('some it1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should return true for a P2PKH address', function () {
      P2PKH_ADDRESSES.forEach(function (address) {
        assert.isTrue(bchaddr.isP2PKHAddress(address))
      })
    })
    it('should return false for a P2SH address', function () {
      P2SH_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isP2PKHAddress(address))
      })
    })
  })

  describe('#isP2SHAddress()', function () {
    it('should fail when called with an invalid address', function () {
      assert.throws(function () {
        bchaddr.isP2SHAddress()
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isP2SHAddress('some invalid address')
      }, bchaddr.InvalidAddressError)
      assert.throws(function () {
        bchaddr.isP2SHAddress('some int1LuPdPkGH5QoNSewQrr8EzNbM27ktPdgQX')
      }, bchaddr.InvalidAddressError)
    })
    it('should return false for a P2PKH address', function () {
      P2PKH_ADDRESSES.forEach(function (address) {
        assert.isFalse(bchaddr.isP2SHAddress(address))
      })
    })
    it('should return true for a P2SH address', function () {
      P2SH_ADDRESSES.forEach(function (address) {
        assert.isTrue(bchaddr.isP2SHAddress(address))
      })
    })
  })

  describe('cashaddr prefix detection', function () {
    it('should return the same result for detectAddressFormat', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.detectAddressFormat),
        CASHADDR_ADDRESSES.map(bchaddr.detectAddressFormat)
      )
    })
    it('should return the same result for detectAddressNetwork', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.detectAddressNetwork),
        CASHADDR_ADDRESSES.map(bchaddr.detectAddressNetwork)
      )
    })
    it('should return the same result for detectAddressType', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.detectAddressType),
        CASHADDR_ADDRESSES.map(bchaddr.detectAddressType)
      )
    })
    it('should return the same result for toLegacyAddress', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.toLegacyAddress),
        CASHADDR_ADDRESSES.map(bchaddr.toLegacyAddress)
      )
    })
    it('should return the same result for toBitpayAddress', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.toBitpayAddress),
        CASHADDR_ADDRESSES.map(bchaddr.toBitpayAddress)
      )
    })
    it('should return the same result for isLegacyAddress', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.isLegacyAddress),
        CASHADDR_ADDRESSES.map(bchaddr.isLegacyAddress)
      )
    })
    it('should return the same result for isBitpayAddress', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.isBitpayAddress),
        CASHADDR_ADDRESSES.map(bchaddr.isBitpayAddress)
      )
    })
    it('should return the same result for isCashAddress', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.isCashAddress),
        CASHADDR_ADDRESSES.map(bchaddr.isCashAddress)
      )
    })
    it('should return the same result for isMainnetAddress', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.isMainnetAddress),
        CASHADDR_ADDRESSES.map(bchaddr.isMainnetAddress)
      )
    })
    it('should return the same result for isTestnetAddress', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.isTestnetAddress),
        CASHADDR_ADDRESSES.map(bchaddr.isTestnetAddress)
      )
    })
    it('should return the same result for isP2PKHAddress', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.isP2PKHAddress),
        CASHADDR_ADDRESSES.map(bchaddr.isP2PKHAddress)
      )
    })
    it('should return the same result for isP2SHAddress', function () {
      assert.deepEqual(
        CASHADDR_ADDRESSES_NO_PREFIX.map(bchaddr.isP2SHAddress),
        CASHADDR_ADDRESSES.map(bchaddr.isP2SHAddress)
      )
    })
  })
})
