# Generate JWT Algos

## Algo: ES512

### Generate private key

```
openssl ecparam -genkey -name secp521r1 -noout -out ecdsa-p521-private.pem
```

### Generate public key

```
openssl ec -in ecdsa-p521-private.pem -pubout -out ecdsa-p521-public.pem
```

## Algo: ES384

### Generate private key

```
openssl ecparam -genkey -name secp384r1 -noout -out ecdsa-p384-private.pem
```

### Generate public key

```
openssl ec -in ecdsa-p384-private.pem -pubout -out ecdsa-p384-public.pem
```

## Algo: ES256

### Generate private key

```
openssl ecparam -genkey -name prime256v1 -noout -out ecdsa-p256-private.pem
```

### Generate public key

```
openssl ec -in ecdsa-p256-private.pem -pubout -out ecdsa-p256-public.pem
```

## Algo: RS256, RS384, RS512

### Generate private key

```
openssl genrsa -out rsa-private.pem 2048
```

### Generate public key

```
openssl rsa -in rsa-private.pem -pubout -out rsa-public.pem
```
