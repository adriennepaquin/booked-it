class DirectUploadsController < ActiveStorage::DirectUploadsController
    skip_before_action :verify_authentication_token

    def create
        byebug
    end
end
