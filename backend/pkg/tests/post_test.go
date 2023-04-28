package tests

import (
	"bytes"
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/decor-gator/backend/pkg/configs"
	"github.com/decor-gator/backend/pkg/controllers"
	"github.com/decor-gator/backend/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func TestGetAllPosts(t *testing.T) {

	// Send new request with json body info
	req, err := http.NewRequest("POST", "/posts", nil)
	if err != nil {
		t.Fatal(err)
	}

	// Record Response
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(controllers.GetPosts)

	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("Handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Decoding recorded response
	var resp []models.Post
	if err := json.Unmarshal(rr.Body.Bytes(), &resp); err != nil {
		t.Errorf("Invalid response, expected list of posts, got %v", rr.Body.String())
	}

	if len(resp) < 1 {
		t.Errorf("Invalid number of posts, expected 1, got %v", len(resp))
	}
}

func TestCreatePost(t *testing.T) {
	configs.ConnectDB()
	controllers.InitAWSSession()
	controllers.CreateBucket()

	// Request Body
	jsonBody := []byte(`{
		"title":		 "A chair!",
		"furnitureType": "chair",
		"description":	 "such beautiful chair",
		"price": 		 22.23,
		"userPosted":	 "angela",
		"imageURL": 	 "fnewkdnfkkcdsmkfcwesd"
	}`)
	bodyReader := bytes.NewReader(jsonBody)

	// Send new request with json body info
	req, err := http.NewRequest("POST", "/posts", bodyReader)
	if err != nil {
		t.Fatal(err)
	}

	// Record Response
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(controllers.CreatePost)

	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("Handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Decoding recorded response
	var resp *mongo.InsertOneResult
	json.Unmarshal(rr.Body.Bytes(), &resp)

	if resp == nil {
		t.Errorf("Insert failed")
	}

	configs.GetCollection(configs.DB, "posts").DeleteOne(context.TODO(),
		bson.D{{Key: "_id", Value: resp.InsertedID}},
	)
}
