 const querys = {
  //products
  getAllProducts: "SELECT * FROM product",
  Producto: "INSERT INTO [market].[dbo].[product] (title, price, category, description, fk_email, image1, image2, image3, image4) VALUES (@title, @price, @category, @description, @user, @image1, @image2, @image3, @image4);",
  getProducById: "SELECT * FROM products Where Id = @Id",
  deleteProduct: "DELETE FROM [market].[dbo].[product] WHERE Id= @Id",
  MyProducts: "SELECT * FROM product WHERE fk_email = @user",
  updateProductById: " UPDATE [market].[dbo].[product] SET title = @title, price =  @price, category = @category, description = @description, image1 = @image1, image2 = @image2, image3 = @image3, image4 = @image4 WHERE Id= @Id",
  
  //favorite
  addfavorite: "IF NOT EXISTS(SELECT 1 FROM favorite WHERE fk_email = @user AND fk_product = @id) BEGIN INSERT INTO [market].[dbo].[favorite] (fk_email, fk_product) VALUES (@user, @id)END",
  deletefavorite: "DELETE FROM [market].[dbo].[favorite] WHERE fk_product= @fk_product",
  getallfavorite: "SELECT p.* FROM product p JOIN favorite f ON p.id = f.fk_product WHERE f.fk_email = @user",

   //users
  addNewUsers: "INSERT INTO [market].[dbo].[users] (name, lastName, city, phone, email, password) VALUES (@name,@lastName,@city,@phone,@email,@password);",
  getUserById: "SELECT * FROM users Where email = @email",
  getUserLogin: "SELECT * FROM users Where email = @email and password = @password",
  NewPass: "UPDATE [market].[dbo].[users] SET password = @password Where email = @email",
  getUser: "SELECT phone FROM users Where email = @email",
  updateUserById: "UPDATE [market].[dbo].[users] SET  name = @name, lastName = @lastName, city = @city, phone = @phone, password = @password WHERE email = @email",
  deleteUser: "DELETE FROM users Where email = @email",

};
module.exports = {querys};