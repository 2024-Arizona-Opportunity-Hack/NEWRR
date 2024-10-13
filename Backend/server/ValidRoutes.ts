export enum ValidRoutes {
  Health = 'health',

  GoogleAuth = 'google-auth', // POST
  Logout = 'logout', // POST
  CheckAuth = 'check-auth', // GET

  JotformCheckin = 'jotform-checkin', // POST WEBHOOK

  CreateAnimal = 'post-animal', // POST
  GetAnimalById = 'get-animal-by-id', // GET
  GetAllAnimals = 'get-all-animals', // GET
  UpdateAnimalById = 'put-animal-by-id', // PUT

  CreateBehavior = 'post-behavior', // POST
  GetBehaviors = 'get-behaviors', // GET
  GetBehaviorById = 'get-behavior-by-id', // GET
  GetBehaviorByName = 'get-behavior-by-name' // GET
}
