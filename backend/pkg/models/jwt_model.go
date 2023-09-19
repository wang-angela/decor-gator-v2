package models

type AccessToken struct {
	AccessToken string `json:"accessToken"`
}

type RefreshToken struct {
	RefreshToken string `json:"refreshToken"`
}

type Exception struct {
	Message string `json:"message"`
}
