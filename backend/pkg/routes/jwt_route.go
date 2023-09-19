package routes

import (
	"github.com/decor-gator/backend/pkg/controllers"
	"github.com/gorilla/mux"
)

func JwtRoutes(r *mux.Router) {
	r.HandleFunc("/authenticate", controllers.CreateAccessEndpoint).Methods("POST")
	r.HandleFunc("/refresh-token", controllers.CreateRefreshEndpoint).Methods("POST")
	r.HandleFunc("/verify", controllers.ValidateMiddleware(controllers.VerifyEndpoint)).Methods("GET")
}
