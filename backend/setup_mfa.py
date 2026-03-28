#!/usr/bin/env python3
"""
Thai Tone Trainer - MFA Setup Script
Setup Montreal Forced Aligner with pre-trained Thai model.
"""

import subprocess
import sys
import os
from pathlib import Path
import argparse

def check_python_version():
    """Check Python version compatibility."""
    if sys.version_info < (3, 8):
        print("❌ Python 3.8 or higher is required")
        sys.exit(1)
    print(f"✅ Python {sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}")

def install_mfa():
    """Install Montreal Forced Aligner."""
    print("\n🔧 Installing Montreal Forced Aligner...")
    
    try:
        # Try to install MFA
        subprocess.run(
            [sys.executable, "-m", "pip", "install", "montreal-forced-aligner"],
            check=True,
            capture_output=True,
            text=True
        )
        print("✅ MFA installed successfully")
    except subprocess.CalledProcessError as e:
        print(f"❌ MFA installation failed: {e.stderr}")
        return False
    
    # Verify installation
    try:
        result = subprocess.run(
            ["mfa", "--version"],
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            print(f"✅ MFA version: {result.stdout.strip()}")
            return True
        else:
            print("❌ MFA not found in PATH")
            return False
    except FileNotFoundError:
        print("❌ MFA command not found")
        return False

def download_thai_model():
    """Download pre-trained Thai MFA model."""
    print("\n🌏 Downloading Thai MFA acoustic model v2.0.0...")
    
    try:
        # Check if model already exists
        result = subprocess.run(
            ["mfa", "model", "list", "acoustic"],
            capture_output=True,
            text=True
        )
        
        if "thai_mfa" in result.stdout:
            print("✅ Thai model already installed")
            return True
        
        # Download model
        print("Downloading Thai acoustic model (400MB, may take a while)...")
        subprocess.run(
            ["mfa", "model", "download", "acoustic", "thai_mfa"],
            check=True,
            capture_output=True,
            text=True
        )
        print("✅ Thai acoustic model downloaded")
        
        # Verify
        subprocess.run(
            ["mfa", "model", "info", "acoustic", "thai_mfa"],
            check=True,
            capture_output=True,
            text=True
        )
        print("✅ Thai model verified")
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Model download failed: {e.stderr}")
        
        # Try manual instructions
        print("\n💡 Manual download option:")
        print("1. Download from: https://mfa-models.github.io/acoustic/Thai/")
        print("2. Install with: mfa model install acoustic thai_mfa_acoustic_model_v2_0_0.zip")
        print("3. Rename: mfa model rename acoustic \"Thai MFA acoustic model v2_0_0\" thai_mfa")
        return False

def download_thai_dictionary():
    """Download Thai pronunciation dictionary."""
    print("\n📚 Downloading Thai pronunciation dictionary...")
    
    try:
        # Check if dictionary exists
        result = subprocess.run(
            ["mfa", "model", "list", "dictionary"],
            capture_output=True,
            text=True
        )
        
        if "thai_mfa" in result.stdout:
            print("✅ Thai dictionary already installed")
            return True
        
        # Download dictionary
        subprocess.run(
            ["mfa", "model", "download", "dictionary", "thai_mfa"],
            check=True,
            capture_output=True,
            text=True
        )
        print("✅ Thai dictionary downloaded")
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Dictionary download failed: {e.stderr}")
        return False

def install_dependencies():
    """Install additional Python dependencies."""
    print("\n📦 Installing additional dependencies...")
    
    dependencies = [
        "librosa==0.10.0",
        "pythainlp==4.0.0",
        "soundfile==0.12.0",
        "textgrid==1.5",
        "numpy==1.24.0",
        "scipy==1.10.0"
    ]
    
    for dep in dependencies:
        try:
            subprocess.run(
                [sys.executable, "-m", "pip", "install", dep],
                check=True,
                capture_output=True,
                text=True
            )
            print(f"✅ Installed {dep}")
        except subprocess.CalledProcessError as e:
            print(f"⚠️  Failed to install {dep}: {e.stderr}")
    
    return True

def create_directory_structure():
    """Create necessary directories."""
    print("\n📁 Creating directory structure...")
    
    directories = [
        "data/thai/lexicon",
        "data/thai/models",
        "data/thai/corpus",
        "data/audio",
        "data/aligned",
        "logs",
        "tests"
    ]
    
    for directory in directories:
        Path(directory).mkdir(parents=True, exist_ok=True)
        print(f"✅ Created {directory}/")
    
    return True

def create_test_files():
    """Create test files for validation."""
    print("\n🧪 Creating test files...")
    
    # Create test text file
    with open("test_thai.txt", "w", encoding="utf-8") as f:
        f.write("สวัสดี\n")
        f.write("ขอบคุณ\n")
        f.write("อาหาร\n")
    
    # Create simple lexicon
    lexicon_path = "data/thai/lexicon/custom_lexicon.txt"
    with open(lexicon_path, "w", encoding="utf-8") as f:
        f.write("สวัสดี\ts a w a t d iː\n")
        f.write("ขอบคุณ\tkʰ ɔ ɔ p kʰ u n\n")
        f.write("อาหาร\tʔ aː h aː n\n")
    
    print(f"✅ Created test_thai.txt")
    print(f"✅ Created {lexicon_path}")
    
    return True

def run_test():
    """Run a simple test to verify setup."""
    print("\n🔍 Running setup test...")
    
    # Check if we can create a silent test audio file
    try:
        import numpy as np
        import soundfile as sf
        
        # Create 1 second of silence
        silence = np.zeros(16000)  # 16kHz * 1 second
        sf.write("test_silence.wav", silence, 16000)
        print("✅ Created test audio file")
        
        # Test MFA alignment with silent audio
        if os.path.exists("test_silence.wav"):
            print("⚠️  Note: Real Thai audio needed for accurate testing")
            print("   Test audio created: test_silence.wav (silence)")
        
        return True
        
    except ImportError as e:
        print(f"⚠️  Could not create test audio: {e}")
        return False

def main():
    """Main setup function."""
    parser = argparse.ArgumentParser(description="Setup MFA for Thai Tone Trainer")
    parser.add_argument("--download-thai-model", action="store_true",
                       help="Download pre-trained Thai MFA model")
    parser.add_argument("--skip-deps", action="store_true",
                       help="Skip dependency installation")
    parser.add_argument("--test-only", action="store_true",
                       help="Run tests only")
    
    args = parser.parse_args()
    
    print("=" * 60)
    print("Thai Tone Trainer - MFA Setup")
    print("=" * 60)
    
    if args.test_only:
        print("\n🧪 Running tests only...")
        run_test()
        return
    
    # Step 1: Check Python
    check_python_version()
    
    # Step 2: Install MFA
    if not install_mfa():
        sys.exit(1)
    
    # Step 3: Download Thai model (if requested)
    if args.download_thai_model:
        if not download_thai_model():
            print("\n⚠️  Thai model download failed. Some features may not work.")
        if not download_thai_dictionary():
            print("\n⚠️  Thai dictionary download failed.")
    
    # Step 4: Install dependencies (optional)
    if not args.skip_deps:
        install_dependencies()
    
    # Step 5: Create directories
    create_directory_structure()
    
    # Step 6: Create test files
    create_test_files()
    
    # Step 7: Run test
    run_test()
    
    print("\n" + "=" * 60)
    print("✅ SETUP COMPLETE")
    print("=" * 60)
    print("\n🎉 Thai Tone Trainer MFA setup is complete!")
    print("\n📋 Next steps:")
    print("1. Add real Thai audio files to data/audio/")
    print("2. Run: python backend/mfa_service.py (if available)")
    print("3. Test alignment with: mfa align test.wav test.txt thai_mfa output/")
    print("4. Review docs/backend/audio-processing-mfa.md for detailed usage")
    print("\n🔧 For troubleshooting:")
    print("   - Check logs/ directory for errors")
    print("   - Verify MFA installation: mfa --version")
    print("   - Test Thai model: mfa model info acoustic thai_mfa")
    print("\n📚 Documentation: docs/backend/audio-processing-mfa.md")

if __name__ == "__main__":
    main()