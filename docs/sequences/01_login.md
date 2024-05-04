```mermaid
sequenceDiagram
	actor user as User
	participant browser as Browser
	participant wallet as Wallet

	user ->> browser: login
	browser ->> wallet: connect wallet
	wallet -->> user:　
	user ->> wallet: connect
	wallet -->> browser:　
	browser -->> user:　
```
