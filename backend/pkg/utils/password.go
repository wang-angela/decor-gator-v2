// https://gowebexamples.com/password-hashing/

package utils

import (
	"log"

	"golang.org/x/crypto/bcrypt"
)

func Encrypt(password string) string {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 10)
	if err != nil {
		log.Fatalln(err)
	}
	return string(bytes)
}

func ComparePassword(password, hash string) bool {
	match := true
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	if err != nil {
		match = false
	}
	return match
}
