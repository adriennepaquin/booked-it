class MonologuesController < ApplicationController
    before_action :authenticate, except: [:index, :show, :pdf]
    
    def index
        monos = Monologue.where(public: true)
        render json: monos
    end

    def pdf
        mono = Monologue.find_by(id: params[:mono_id])
        # byebug
        mono_pdf = rails_blob_path(mono.mono_pdf)
        render json: { mono: mono, mono_pdf: mono_pdf }
    end

    def show
        my_monos = Monologue.where(user_id: params[:id])
        render json: my_monos
    end

    def create
        monologue = Monologue.find_by(user_id: params[:user_id], role: params[:role], play: params[:play])
        if monologue
            render json: { errors: ["Monologue already exists"]}, status: :unprocessable_entity
        else
            new_monologue = Monologue.create(monologue_params)
            # byebug
            if new_monologue.valid?
                render json: new_monologue
            else
                render json: {errors: new_monologue.errors.full_messages}, status: :unprocessable_entity
            end
        end
    end

    def update
        mono = Monologue.find_by(id: params[:id])
        # byebug
        mono.update(mono_pdf: params[:mono_pdf])
        # byebug
        mono_pdf = rails_blob_path(mono.mono_pdf)
        # byebug
        render json: { mono: mono, mono_pdf: mono_pdf}
    end

    #DELETE /destroy
    def destroy
        # byebug
        mono = Monologue.find_by(id: params[:id])
        if mono
            # byebug
            mono.destroy
            render json: mono
        else
            render json: { error: "Monologue not found" }, status: :not_found
        end
    end

    private

    def monologue_params
        params.permit(:role, :play, :playwright, :public, :genre, :length, :first_line, :user_id)
    end
end
