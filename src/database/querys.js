export const querys = {
  //products
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct: "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById: "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  //users
  
  addNewUsers: "INSERT INTO [MarketPlace].[dbo].[users] (name, lastName, city, phone, email, password) VALUES (@name,@lastName,@city,@phone,@email,@password);",
  getTotalUsers: "SELECT * FROM users",
  updateUserById: "UPDATE [MarketPlace].[dbo].[users] SET  name = @name, lastName = @lastName, city = @city, phone = @phone, email = @email, password = @password WHERE email = @email",
  getUserById: "SELECT * FROM users Where email = @email",
 
};
