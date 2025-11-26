function userForm(req,res){
  res.write(`
     <form method="POST" action="/submit">
      <input type="text" name="username" placeholder="Enter Name" />
      <input type="text" name="email" placeholder="Enter Email" />
      <button type="submit">Submit</button>
    </form>
    `)
}
module.exports=userForm;