class Person < ApplicationRecord
  validates :first_name, length: {minimum: 2, maximum: 55}
  validates :last_name, length: {minimum: 2, maximum: 55}
  validates :email, format: { with: /\b[A-Z0-9._%a-z\-]+@example\.com\z/,
  message: "Enter a example.com email address" }
end
