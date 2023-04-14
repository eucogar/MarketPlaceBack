export const querys = {
  //products
  getAllProducts: "SELECT * FROM product",
  Producto: "INSERT INTO [MarketPlace].[dbo].[product] (title, price, category, description, fk_email, image1, image2, image3, image4) VALUES (@title, @price, @category, @description, @user, @image1, @image2, @image3, @image4);",
  getProducById: "SELECT * FROM products Where Id = @Id",
  deleteProduct: "DELETE FROM [MarketPlace].[dbo].[products] WHERE Id= @Id",
  MyProducts: "SELECT * FROM product WHERE fk_email = @user",

   //users
  addNewUsers: "INSERT INTO [MarketPlace].[dbo].[users] (name, lastName, city, phone, email, password) VALUES (@name,@lastName,@city,@phone,@email,@password);",
  getUserById: "SELECT * FROM users Where email = @email",
  getUserLogin: "SELECT * FROM users Where email = @email and password = @password",
  getUser: "SELECT * FROM users Where email = @email",
  updateUserById: "UPDATE [MarketPlace].[dbo].[users] SET  name = @name, lastName = @lastName, city = @city, phone = @phone, password = @password WHERE email = @email",
  deleteUser: "DELETE FROM users Where email = @email",

};
