use eshop;

select * from user;
select * from address;

-- Inserción del primer usuario (tabla user)
insert into user (firstName, lastName, dateBirth)
values ("John", "Smith", "2016-12-10 18:28:09");

-- Inserción del primer usuario (tabla address)
insert into address(idUser, street, city, state, postalCode)
values (1, "21 2nd Street", "New York", "NY", "10021");

-- Unión de los datos user-address
select * from user join address on address.idUser=user.idUser;

-- Inserción de un segundo usuario (mis datos)
insert into user (firstName, lastName, dateBirth)
values ("Ricard", "Bargallo", "1992-09-04 12:30:21");

insert into address(idUser, street, city, state, postalCode)
values (2, "34 Oxford Street", "London", "England", "12345");

-- Inserción de un producto
insert into product (idUser, name, description, category, price)
values ("1", "Water Bottle", "High quality glass bottle provides a healthier way to drink. Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel. Eliminates toxic leaching that plastic can cause. Innovative design holds 22-1/2 ounces. Dishwasher safe", "Kitchen", 23.0);

select * from user join product on product.idUser=user.idUser;