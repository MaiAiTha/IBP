# Fabric Operations Console - Scenario 1

### First use case of IBP :
* 1 cluster k8s
* 2 IBP
* 2 orgs
* 1 orderer

Original console git : https://github.com/hyperledger-labs/fabric-operations-console

## Prerequisites

* zip
* jq
* docker
* docker-compose (V2)
* WSL2 (Windows only)

## Getting Started

```
git clone https://github.com/MaiAiTha/IBP.git
```

```
cd ibp-scenario-1
```

## Bring up HLF network

```
./console-org1/scripts/setupNetwork.sh up
```

## Bring up the 2 consoles

```
./setupConsoles.sh up
```

## Create assets for each organization

```
./console-org1/scripts/createAssets.sh
```

```
./console-org2/scripts/createAssets.sh
```

## Console setup

Open 2 new and different browsers to URL :
* http://localhost:3100/ for org1 
* http://localhost:3200/ for org2
* Login with admin/password
* Change password

(Be sure to use 2 new and different browers to avoid creating conflicts with storaged datas and cookies.)

## Import components into console

For each console :
* Switch to "Settings" page 
* Click "Import"
* Select zip file .console-org1/workarea/console_assets.zip or .console-org2/workarea/console_assets.zip


## Create Identities
* Switch to Nodes page and perform the following steps

#### ordererca
* Select CA "ordererca-local"
* Associate Identity
* Enter admin/adminpw for enroll id and secret
* Select the overflow menu (3 dots) against "ordererAdmin"
* Select "Enroll identity"
* Enter "ordererAdminpw" for Enroll secret
* Next
* Enter identity display name as "OrdererMSP Admin"
* Click "Add Identity to wallet"

#### org1ca
* Select CA "org1ca-local"
* Associate Identity
* Enter admin/adminpw for enroll id and secret
* Select the overflow menu (3 dots) against "org1admin"
* Select "Enroll identity"
* Enter "org1adminpw" for Enroll secret
* Next
* Enter identity display name as "Org1MSP Admin"
* Click "Add Identity to wallet"

#### org2ca
* Select CA "org2ca-local"
* Associate Identity
* Enter admin/adminpw for enroll id and secret
* Select the overflow menu (3 dots) against "org2admin"
* Select "Enroll identity"
* Enter "org2adminpw" for Enroll secret
* Next
* Enter identity display name as "Org2MSP Admin"
* Click "Add Identity to wallet"


### Associate Identity
* Switch to Nodes page and perform the following steps
* Select peer "org1_peer1 - local"
* Associate Identity
* Select "Org1MSP Admin"

* Select peer "org2_peer1 - local"
* Associate Identity
* Select "Org2MSP Admin"

* Select orderer "orderer_local"
* Associate Identity
* Select "OrdererMSP Admin"

## Enjoy!
You should be able to manage channels, Using 2.0 lifecycle to install, approve, commit smart contracts following the guide

## Bring down network and consoles

```
./console-org1/scripts/setupNetwork.sh down
```
```
./setupConsoles.sh down
```

## Couchdb credentials (for console)

- URL - http://127.0.0.1:5185/_utils/ or http://127.0.0.1:5285/_utils/
- Login - admin/password
