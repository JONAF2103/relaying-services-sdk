(()=>{"use strict";var e={839:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ERC20Token=void 0;var a=function(){function e(){}return e.getAbi=function(){return[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"supply",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"multiplier",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balances",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"decimals",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"transferFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"version",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner_address",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"num",type:"uint256"}],name:"mint",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"num",type:"uint256"},{name:"target",type:"address"}],name:"mintFor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"initial_supply",type:"uint256"},{name:"decimal_units",type:"uint8"},{name:"token_name",type:"string"},{name:"token_symbol",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_to",type:"address"},{indexed:!0,name:"_num",type:"uint256"}],name:"Minted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"}]},e}();t.ERC20Token=a},601:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ZERO_ADDRESS=void 0,t.ZERO_ADDRESS="0x0000000000000000000000000000000000000000"},104:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Contracts=void 0;var r=a(593),n=a(601),s=a(820),i=function(){function e(e,t,a){this.web3Instance=e,a=null!=a?a:{};var s=(0,r.getContractAddresses)(null!=t?t:n.DEFAULT_NETWORK_ID);this.addresses=(0,r.mergeConfiguration)(a,s),this.initialize()}return e.prototype.initialize=function(){try{this.smartWalletRelayVerifier=(0,r.getContract)(this.web3Instance,s.RelayVerifier.abi,this.addresses.smartWalletRelayVerifier),this.smartWalletDeployVerifier=(0,r.getContract)(this.web3Instance,s.DeployVerifier.abi,this.addresses.smartWalletDeployVerifier),console.debug("Contracts initialized correctly")}catch(e){console.error("Contracts fail to initialize",e)}},e.prototype.getSmartWalletFactory=function(){return this.smartWalletFactory||(this.smartWalletFactory=(0,r.getContract)(this.web3Instance,s.SmartWalletFactory.abi,this.addresses.smartWalletFactory)),this.smartWalletFactory},e.prototype.getSmartWalletRelayVerifier=function(){return this.smartWalletRelayVerifier||(this.smartWalletRelayVerifier=(0,r.getContract)(this.web3Instance,s.RelayVerifier.abi,this.addresses.smartWalletRelayVerifier)),this.smartWalletRelayVerifier},e.prototype.getSmartWalletDeployVerifier=function(){return this.smartWalletDeployVerifier||(this.smartWalletDeployVerifier=(0,r.getContract)(this.web3Instance,s.DeployVerifier.abi,this.addresses.smartWalletDeployVerifier)),this.smartWalletDeployVerifier},e}();t.Contracts=i},231:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultRelayingServices=void 0;var r=a(780),n=a(342),s=(0,r.__importDefault)(a(409)),i=a(820),o=a(593),l=a(839),c=a(601),u=a(104),d=a(784),y=function(){function e(e){var t=e.rskHost,a=e.account,r=e.web3Provider,n=e.web3Instance;this.txId=777,this.web3Instance=n||(r?new s.default(r):new s.default(t)),this.account=a}return e.prototype.configure=function(e){return(0,r.__awaiter)(this,void 0,void 0,(function(){var t,a,s,i,l,c,u,d;return(0,r.__generator)(this,(function(y){switch(y.label){case 0:return y.trys.push([0,3,,4]),a=o.mergeConfiguration,s=[e],d={onlyPreferredRelays:!0,preferredRelays:["http://localhost:8090"],gasPriceFactorPercent:0,relayLookupWindowBlocks:1e5},[4,this.web3Instance.eth.getChainId()];case 1:return t=a.apply(void 0,s.concat([(d.chainId=y.sent(),d.relayVerifierAddress=this.contracts.addresses.smartWalletRelayVerifier,d.deployVerifierAddress=this.contracts.addresses.smartWalletDeployVerifier,d.smartWalletFactoryAddress=this.contracts.addresses.smartWalletFactory,d)])),i=t.relayHubAddress,l=(0,r.__rest)(t,["relayHubAddress"]),[4,(0,n.resolveConfiguration)(this.web3Instance.currentProvider,l)];case 2:return(c=y.sent()).relayHubAddress=null!=i?i:this.contracts.addresses.relayHub,[2,c];case 3:return u=y.sent(),console.log(u),[3,4];case 4:return[2]}}))}))},e.prototype.initialize=function(e,t){return(0,r.__awaiter)(this,void 0,void 0,(function(){var a,s,i,o,l,c,d;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),a=this,s=u.Contracts.bind,i=[void 0,this.web3Instance],[4,this.web3Instance.eth.getChainId()];case 1:return a.contracts=new(s.apply(u.Contracts,i.concat([r.sent(),t]))),o=this,[4,this.web3Instance.eth.getAccounts()];case 2:return o.developmentAccounts=r.sent(),[4,this.configure(e)];case 3:return l=r.sent(),[4,(c=new n.RelayProvider(this.web3Instance.currentProvider,l)).relayClient._init()];case 4:return r.sent(),this.account&&c.addAccount({address:this.account.address,privateKey:Buffer.from(this.account.privateKey.replaceAll("0x",""),"hex")}),this.web3Instance.setProvider(c),this.relayProvider=c,console.debug("RelayingServicesSDK initialized correctly"),[3,6];case 5:return d=r.sent(),console.error("RelayingServicesSDK fail to initialize",d),[3,6];case 6:return[2]}}))}))},e.prototype.allowToken=function(e,t){return(0,r.__awaiter)(this,void 0,void 0,(function(){var a,n,s,l,c,u;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return console.debug("allowToken Params",{tokenAddress:e,contractsOwnerAccount:t}),a=(0,o.getAbiItem)(i.RelayVerifier.abi,"acceptToken"),n=this.web3Instance.eth.abi.encodeFunctionCall(a,[e]),s={from:t.address,to:this.contracts.addresses.smartWalletRelayVerifier,data:n},[4,t.signTransaction(s)];case 1:return l=r.sent(),[4,this.web3Instance.eth.sendSignedTransaction(l.rawTransaction)];case 2:if(!(c=r.sent()).status)throw u="Error sending allowToken transaction",console.debug(u,c),new Error(u);return[2]}}))}))},e.prototype.claim=function(e){return(0,r.__awaiter)(this,void 0,void 0,(function(){return(0,r.__generator)(this,(function(t){throw console.debug("claim Params",{commitmentReceipt:e}),new Error("NOT IMPLEMENTED: this will be available with arbiter integration.")}))}))},e.prototype.deploySmartWallet=function(e,t,a){return(0,r.__awaiter)(this,void 0,void 0,(function(){var n;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return console.debug("deploySmartWallet Params",{smartWallet:e,tokenAddress:t,tokenAmount:a}),a=null!=a?a:0,console.debug("Checking if the wallet already exists"),[4,(0,o.addressHasCode)(this.web3Instance,e.address)];case 1:return r.sent()?[3,5]:t?[4,(0,o.getContract)(this.web3Instance,l.ERC20Token.getAbi(),t).methods.balanceOf(e.address).call()]:[3,3];case 2:r.sent()<=0&&console.warn("Smart Wallet doesn't have funds so this will be a subsidized deploy."),r.label=3;case 3:return console.debug("Deploying smart wallet for address",e.address),[4,this.relayProvider.deploySmartWallet({from:this.getAccountAddress(),to:c.ZERO_ADDRESS,callVerifier:this.contracts.addresses.smartWalletDeployVerifier,callForwarder:this.contracts.addresses.smartWalletFactory,tokenContract:t,tokenAmount:a.toString(),data:"0x",index:e.index.toString(),recoverer:c.ZERO_ADDRESS,isSmartWalletDeploy:!0,onlyPreferredRelays:!0,smartWalletAddress:e.address})];case 4:return n=r.sent(),console.debug("Smart wallet successfully deployed",n),e.deployTransaction=n,e.deployed=!0,e.tokenAddress=t,[2,e];case 5:throw new Error("Smart Wallet already deployed")}}))}))},e.prototype.generateSmartWallet=function(e){return(0,r.__awaiter)(this,void 0,void 0,(function(){var t,a,n;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return console.debug("generateSmartWallet Params",{smartWalletIndex:e}),console.debug("Generating computed address for smart wallet"),t=this.contracts.getSmartWalletFactory(),a=t.methods.getSmartWalletAddress(this.getAccountAddress(),c.ZERO_ADDRESS,e).call(),console.debug("Checking if the wallet already exists"),[4,(0,o.addressHasCode)(this.web3Instance,a)];case 1:return n=r.sent(),[2,{address:a,index:e,deployed:n}]}}))}))},e.prototype.getAllowedTokens=function(){return(0,r.__awaiter)(this,void 0,void 0,(function(){var e,t,a,n,s;return(0,r.__generator)(this,(function(i){switch(i.label){case 0:return e=this.contracts.getSmartWalletRelayVerifier(),t=this.contracts.getSmartWalletDeployVerifier(),[4,e.methods.getAcceptedTokens().call()];case 1:return a=i.sent(),[4,t.methods.getAcceptedTokens().call()];case 2:return n=i.sent(),s=new Set((0,r.__spreadArray)((0,r.__spreadArray)([],(0,r.__read)(a),!1),(0,r.__read)(n),!1)),[2,(0,r.__spreadArray)([],(0,r.__read)(s),!1)]}}))}))},e.prototype.isAllowedToken=function(e){return(0,r.__awaiter)(this,void 0,void 0,(function(){var t,a,n,s;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return console.debug("isAllowedToken Params",{tokenAddress:e}),t=this.contracts.getSmartWalletRelayVerifier(),a=this.contracts.getSmartWalletDeployVerifier(),[4,t.methods.acceptsToken(e).call()];case 1:return n=r.sent(),[4,a.methods.acceptsToken(e).call()];case 2:return s=r.sent(),[2,n&&s]}}))}))},e.prototype.isSmartWalletDeployed=function(e){return(0,r.__awaiter)(this,void 0,void 0,(function(){return(0,r.__generator)(this,(function(t){switch(t.label){case 0:return console.debug("isSmartWalletDeployed Params",{smartWalletAddress:e}),[4,(0,o.addressHasCode)(this.web3Instance,e)];case 1:return[2,t.sent()]}}))}))},e.prototype.relayTransaction=function(e,t,a){return(0,r.__awaiter)(this,void 0,void 0,(function(){var n,s,i,l,c,u=this;return(0,r.__generator)(this,(function(d){switch(d.label){case 0:return console.debug("relayTransaction Params",{unsignedTx:e,smartWallet:t,tokenAmount:a}),console.debug("Checking if the wallet exists"),[4,(0,o.addressHasCode)(this.web3Instance,t.address)];case 1:return d.sent()?(l={jsonrpc:"2.0",id:++this.txId,method:"eth_sendTransaction"},c={from:this.getAccountAddress(),to:t.tokenAddress,value:"0",relayHub:this.contracts.addresses.relayHub,callVerifier:this.contracts.addresses.smartWalletRelayVerifier,callForwarder:t.address,data:e.data,tokenContract:t.tokenAddress},[4,this.web3Instance.utils.toWei(a.toString())]):[3,4];case 2:return l.params=[(c.tokenAmount=d.sent(),c.onlyPreferredRelays=!0,c)],n=l,[4,new Promise((function(e,t){u.relayProvider._ethSendTransaction(n,(function(a,n){return(0,r.__awaiter)(u,void 0,void 0,(function(){var s;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return a&&t(a),[4,web3.eth.getTransactionReceipt(n.result)];case 1:return s=r.sent(),e(s),[2]}}))}))}))}))];case 3:if(!(s=d.sent()).status)throw i="Error relaying transaction",console.debug(i,s),new Error(i);return[2,s];case 4:throw new Error("Smart Wallet is not deployed or the address "+t.address+" is not a smart wallet.")}}))}))},e.prototype.estimateMaxPossibleRelayGas=function(e,t){return(0,r.__awaiter)(this,void 0,void 0,(function(){var a,n,s,i,o;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return console.debug("estimateMaxPossibleRelayGas Params",{smartWallet:e}),n=d.toBN,[4,this.relayProvider.relayClient._calculateGasPrice()];case 1:return a=n.apply(void 0,[r.sent()]),[4,this.web3Instance.utils.toWei("1")];case 2:return s=r.sent(),i={from:this.getAccountAddress(),to:c.ZERO_ADDRESS.toString(),value:"0",relayHub:this.contracts.addresses.relayHub,callVerifier:this.contracts.addresses.smartWalletRelayVerifier,callForwarder:this.contracts.addresses.smartWalletFactory,data:"0x",index:e.index.toString(),tokenContract:this.contracts.addresses.testToken,tokenAmount:s,onlyPreferredRelays:!0,isSmartWalletDeploy:!0,smartWalletAddress:e.address,recoverer:c.ZERO_ADDRESS.toString()},[4,this.relayProvider.relayClient.estimateMaxPossibleRelayGas(i,t)];case 3:return o=r.sent(),[2,(0,d.toBN)(o).mul(a).toString()]}}))}))},e.prototype.getAccountAddress=function(){return this.account?this.account.address:this.developmentAccounts[0]},e}();t.DefaultRelayingServices=y},593:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mergeConfiguration=t.getContractAddresses=t.getContract=t.addressHasCode=t.getAbiItem=void 0;var r=a(780),n=a(820);t.getAbiItem=function(e,t){var a=e.filter((function(e){return e.name===t}));if(a.length>0)return a[0];throw new Error("Item "+t+" doesn't exists on contract abi")},t.addressHasCode=function(e,t){return(0,r.__awaiter)(this,void 0,void 0,(function(){var a;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,e.eth.getCode(t)];case 1:return[2,"0x00"!==(a=r.sent())&&"0x"!==a]}}))}))},t.getContract=function(e,t,a){return new e.eth.Contract(t,a)},t.getContractAddresses=function(e){return n.ContractAddresses[e]},t.mergeConfiguration=function(e,t){var a={};return Object.keys(t).forEach((function(e){return a[e]=t[e]})),Object.keys(e).forEach((function(t){return a[t]=e[t]})),a}},342:e=>{e.exports=require("@rsksmart/rif-relay-client")},820:e=>{e.exports=require("@rsksmart/rif-relay-contracts")},780:e=>{e.exports=require("tslib")},409:e=>{e.exports=require("web3")},784:e=>{e.exports=require("web3-utils")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,a),s.exports}var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultRelayingServices=void 0;var t=a(231);Object.defineProperty(e,"DefaultRelayingServices",{enumerable:!0,get:function(){return t.DefaultRelayingServices}})})(),module.exports=r})();