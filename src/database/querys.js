export const querys = {
  //products
  getAllProducts: "SELECT * FROM products",
  getProducById: "SELECT * FROM products Where Id = @Id",
  addNewProduct: "INSERT INTO [MarketPlace].[dbo].[products] (image, title, price, category, description, id, fk_email) VALUES (@image, @title, @price, @category, @description, @id, @fk_email);",
  deleteProduct: "DELETE FROM [MarketPlace].[dbo].[products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM [MarketPlace].[dbo].[products]",
  updateProductById: "UPDATE [MarketPlace].[dbo].[products] SET image = @image, title = @title, price = @price, category = @category, description = @description, fk_email = @fk_email  WHERE Id = @id",
  //users
  
  addNewUsers: "INSERT INTO [MarketPlace].[dbo].[users] (name, lastName, city, phone, email, password) VALUES (@name,@lastName,@city,@phone,@email,@password);",
  getTotalUsers: "SELECT * FROM users",
  getUserById: "SELECT * FROM users Where email = @email",
  updateUserById: "UPDATE [MarketPlace].[dbo].[users] SET  name = @name, lastName = @lastName, city = @city, phone = @phone, email = @email, password = @password WHERE email = @email",
  deleteUser: "DELETE FROM users Where email = @email",
 
};
