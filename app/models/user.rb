class User < ApplicationRecord
    has_secure_password

    belongs_to :admin, optional: true
    belongs_to :manager, optional: true
    belongs_to :developer, optional: true

    has_many :projects
    has_many :tickets
    has_many :comments, as: :commentable
    accepts_nested_attributes_for :comments

    has_many :notifications, as: :recipient

end
