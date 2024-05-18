```mermaid
sequenceDiagram
	actor user as User
	participant browser as Browser
	participant wallet as Wallet
	participant contract as Contract

	user ->> browser: transfer token
	browser ->> browser: make transaction
	browser ->> wallet: request to sign
	wallet -->> user:　
	user ->> wallet: sign

	wallet ->> contract: send transaction
	contract -->> wallet:　
	wallet -->> browser:　
    browser -->> user:　
```
