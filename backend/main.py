from fastapi import FastAPI, UploadFile, File, HTTPException, Form
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import uvicorn
import shutil
import os
from pydantic import BaseModel

from backend.ai_engine import predict_tumor, chat_with_patient

class ChatRequest(BaseModel):
    message: str
    language: str = "en"

app = FastAPI(title="Brain Tumor Detection API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for simplicity/debugging
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure upload directory exists
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


# Mount static files
app.mount("/static", StaticFiles(directory="backend/static"), name="static")

@app.get("/")
def read_root():
    return FileResponse("backend/static/index.html")

@app.post("/predict")
async def analyze_scan(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    file_path = os.path.join(UPLOAD_DIR, file.filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Run AI inference
    try:
        result = predict_tumor(file_path)
        return {"filename": file.filename, "result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    response = chat_with_patient(request.message, request.language)
    return {"response": response}

if __name__ == "__main__":
    import uvicorn
    print("\n\n📍 APP IS STARTING! OPEN THIS LINK IN YOUR BROWSER: http://localhost:8000\n\n")
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
