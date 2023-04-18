DROP TABLE IF EXISTS BasketItem;
DROP TABLE IF EXISTS Basket;
DROP TABLE IF EXISTS ProductStock;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Client;



CREATE TABLE Product (
	Id INT GENERATED ALWAYS AS IDENTITY,
	Name VARCHAR ( 50 ) NOT NULL,
	Description VARCHAR ( 255 ) ,
	QuantityValue int not null,
    QuantityType VARCHAR ( 16 ) NOT null,
    DeliverBy VARCHAR ( 50 ) null,
	Price numeric(6,2) not null,
	Items INT not null,
	InStock boolean not null default true,
	
	PRIMARY KEY(Id)
);


-- CREATE TABLE ProductStock (
-- 	Id INT GENERATED ALWAYS AS IDENTITY,
-- 	ProductId INT,
-- 	Items INT not null,
-- 	InStock boolean not null default true,
	
-- 	PRIMARY KEY(Id),
-- 	CONSTRAINT FK_PRODUCT_ID FOREIGN KEY(ProductId) REFERENCES Product(Id)
-- );

CREATE TABLE Client (
	Id INT GENERATED ALWAYS AS IDENTITY,
	Name VARCHAR ( 50 ) NOT NULL,
	Phone VARCHAR ( 16 ) UNIQUE NOT NULL,
	Email VARCHAR ( 255 ) UNIQUE NOT NULL,
	Address VARCHAR ( 255 ) NOT NULL,
    Status VARCHAR ( 50 ) null,
	
	PRIMARY KEY(Id)
);

CREATE TABLE Basket (
	Id INT GENERATED ALWAYS AS IDENTITY,
	ClientId INT,
	Status VARCHAR ( 50 ) null,
	Discount numeric(6,2) null,
	PriceWithoutDiscount numeric(6,2) null,
	TotalPrice numeric(6,2) not null,
	
	PRIMARY KEY(Id),
	CONSTRAINT FK_CLIENT_ID FOREIGN KEY(ClientId) REFERENCES Client(Id)
);

CREATE TABLE BasketItem (
	Id INT GENERATED ALWAYS AS IDENTITY,
	BasketId INT,
	ProductId INT,
	Items INT not null,
	Price numeric(6,2) not null,
	
	PRIMARY KEY(Id),
	CONSTRAINT FK_BASKET_ID FOREIGN KEY(BasketId) REFERENCES Basket(Id),
	CONSTRAINT FK_PRODUCT_ID FOREIGN KEY(ProductId) REFERENCES Product(Id)
);


--Product
INSERT INTO public.product
("name", description, quantityvalue, quantitytype, deliverby, price, items, instock)
values('Produs1', 'Descriere1', 1, 'buc', 'Deliver1', 12.99, 80, true);

INSERT INTO public.product
("name", description, quantityvalue, quantitytype, deliverby, price, items, instock)
values('Produs2', 'Descriere2', 1, 'buc', 'Deliver2', 2.00, 80, true);

INSERT INTO public.product
("name", description, quantityvalue, quantitytype, deliverby, price, items, instock)
values('Produs3', 'Descriere3', 1, 'buc', 'Deliver3', 10.11, 80, true);


--Client
INSERT INTO public.client
("name", phone, email, address, status)
VALUES('Client1', '0748700031', 'email1@gmail.com', 'Address1', 'Active'),
('Client2', '0748700032', 'email2@gmai2.com', 'Address2', 'Active'),
('Client3', '0748700033', 'email3@gmail.com', 'Address3', 'Active');


--Basket & BasketItem
INSERT INTO public.basket
(clientid, status, discount, pricewithoutdiscount, totalprice)
VALUES(1, 'InProcess', 0, 12.99, 12.99);

INSERT INTO public.basketitem
(basketid, productid, items, price)
VALUES(lastval(), 1, 1, 12.99);


INSERT INTO public.basket
(clientid, status, discount, pricewithoutdiscount, totalprice)
VALUES(2, 'InProcess', 0, 2, 2);

INSERT INTO public.basketitem
(basketid, productid, items, price)
VALUES(lastval(), 2, 1, 2);


INSERT INTO public.basket
(clientid, status, discount, pricewithoutdiscount, totalprice)
VALUES(3, 'InProcess', 0, 10.11, 10.11);

INSERT INTO public.basketitem
(basketid, productid, items, price)
VALUES(lastval(), 3, 1, 10.11);