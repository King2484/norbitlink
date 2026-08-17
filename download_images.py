import urllib.request
import os

# Curated high-resolution Unsplash photos for UK healthcare & construction recruitment
images = {
    # Healthcare
    "img-care-home.jpg": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop", # Care assistant with senior
    "img-elderly-care.jpg": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1200&auto=format&fit=crop", # Elderly care support
    "img-nurse-portrait.jpg": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop", # Clinical nurse
    "img-hospital-ward.jpg": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop", # Modern hospital / clinical corridor
    "img-supported-scheme.jpg": "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop", # Supported living / community conversation
    "img-mental-health-support.jpg": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop", # Empathy consultation
    
    # Construction
    "img-site-manager.jpg": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=1200&auto=format&fit=crop", # Construction site manager with hardhat
    "img-bricklayer.jpg": "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop", # Brickwork masonry
    "img-site-scaffold.jpg": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop", # Commercial construction building structure
    "img-heavy-plant.jpg": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop", # Heavy civil machinery & earthmover
    "img-civils-groundwork.jpg": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop", # Construction team on building site
    "img-joiner-workshop.jpg": "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop", # Woodworking & joinery

    # Corporate / Recruitment / Liverpool
    "img-boardroom-meeting.jpg": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop", # Corporate meeting negotiation
    "img-client-handshake.jpg": "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop", # Handshake client agreement
    "img-candidate-screening.jpg": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop", # 1-on-1 interview
    "img-diverse-workers.jpg": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", # Team collaborative office
}

out_dir = r"c:\Users\DanielUshie\Desktop\norbitlink\public"

for filename, url in images.items():
    dest = os.path.join(out_dir, filename)
    print(f"Downloading {filename}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as response, open(dest, 'wb') as out_file:
            out_file.write(response.read())
        print(f" Saved {filename}")
    except Exception as e:
        print(f" Failed {filename}: {e}")

print("Done downloading all unique images!")
