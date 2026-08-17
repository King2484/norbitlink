import urllib.request
import os

images = {
    # Workflow Steps & Perks
    "img-step-consult.jpg": "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop", # Business consultation
    "img-step-match.jpg": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", # Screen matching analytics
    "img-step-audit.jpg": "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop", # Legal document audit
    "img-step-deploy.jpg": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=1200&auto=format&fit=crop", # Construction site morning deployment
    
    # Candidate Perks
    "img-perk-shifts.jpg": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop", # Mobile schedule flexibility
    "img-perk-pay.jpg": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop", # Weekly payroll & banking
    "img-perk-career.jpg": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop", # Medical career progression
    "img-perk-support.jpg": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop", # Continuous consultant backing

    # Pillars & Values
    "img-pillar-compliance.jpg": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop", # Rigorous audit & planning
    "img-pillar-talent.jpg": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop", # Dependable talent portrait
    "img-pillar-dispatch.jpg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop", # Rapid dispatch logistics
    "img-pillar-specialist.jpg": "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop", # Specialist clinical focus
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

print("Done downloading all step & pillar images!")
