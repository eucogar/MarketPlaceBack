export const querys = {
  //products
  getAllProducts: "SELECT * FROM products",
  getProducById: "SELECT * FROM products Where Id = @Id",
  addNewProduct: "INSERT INTO [MarketPlace].[dbo].[products] (title, price, category, description, fk_email) VALUES (@title, @price, @category, @description, @user);",
  addNewImage: "INSERT INTO [MarketPlace].[dbo].[image] (image1, image2, image3, image4) VALUES (@image1, @image2, @image3, @image4);",
  addNewImage2: "INSERT INTO [MarketPlace].[dbo].[image] (image1) VALUES (@imageBuffer);",
  deleteProduct: "DELETE FROM [MarketPlace].[dbo].[products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM [MarketPlace].[dbo].[products]",
  updateProductById: "UPDATE [MarketPlace].[dbo].[products] SET title = @title, price = @price, category = @category, description = @description  WHERE Id = @id",
  //users
  
  addNewUsers: "INSERT INTO [MarketPlace].[dbo].[users] (name, lastName, city, phone, email, password) VALUES (@name,@lastName,@city,@phone,@email,@password);",
  getTotalUsers: "SELECT * FROM users",
  getUserById: "SELECT * FROM users Where email = @email",
  getUserLogin: "SELECT * FROM users Where email = @email and password = @password",
  updateUserById: "UPDATE [MarketPlace].[dbo].[users] SET  name = @name, lastName = @lastName, city = @city, phone = @phone, email = @email, password = @password WHERE email = @email",
  deleteUser: "DELETE FROM users Where email = @email",
 
};
