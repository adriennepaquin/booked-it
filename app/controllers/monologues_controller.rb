class MonologuesController < ApplicationController
    before_action :authenticate, except: [:index, :show, :pdf]
    
    # GET 
    def index
        monos = Monologue.where(public: true)
        render json: monos
    end

    # custom route for PDFs
    def pdf
        mono = Monologue.find_by(id: params[:mono_id])
        mono_pdf = rails_blob_path(mono.mono_pdf)
        render json: { mono: mono, mono_pdf: mono_pdf }
    end

    # GET /:id
    def show
        my_monos = Monologue.where(user_id: params[:id])
        render json: my_monos
    end

    # POST /create
    def create
        monologue = Monologue.find_by(user_id: params[:user_id], role: params[:role], play: params[:play])
        if monologue
            render json: { errors: ["Monologue already exists"]}, status: :unprocessable_entity
        else
            new_monologue = Monologue.create(monologue_params)
            if new_monologue.valid?
                render json: new_monologue
            else
                render json: {errors: new_monologue.errors.full_messages}, status: :unprocessable_entity
            end
        end
    end

    # UPDATE /:id
    def update
        mono = Monologue.find_by(id: params[:id])
        mono.update(mono_pdf: params[:mono_pdf])
        mono_pdf = rails_blob_path(mono.mono_pdf)
        render json: { mono: mono, mono_pdf: mono_pdf}
    end

    #DELETE /destroy
    def destroy
        mono = Monologue.find_by(id: params[:id])
        if mono
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
