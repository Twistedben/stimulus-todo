class Person < ApplicationRecord
  # User.first.host_video
  store :settings, accessors: [ :host_video, :participants_video, :join_before_host ], code: JSON
  validates :first_name, length: {minimum: 2, maximum: 55}
  validates :last_name, length: {minimum: 2, maximum: 55}
  validates :email, format: { with: /\b[A-Z0-9._%a-z\-]+@example\.com\z/,
  message: "Enter a example.com email address" }
end
