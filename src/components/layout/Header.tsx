"use client";

import { Moon, Sun, Lightbulb } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [suggestDialogOpen, setSuggestDialogOpen] = useState(false);
  const [toolSuggestion, setToolSuggestion] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSuggestTool = () => {
    setSuggestDialogOpen(true);
  };

  const handleSubmitSuggestion = () => {
    // In a real app, this would send the suggestion to a backend
    console.log("Tool suggestion:", toolSuggestion);
    setSuggestDialogOpen(false);
    setToolSuggestion("");
  };

  return (
    <header className="sticky top-0 z-50 glass-card">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            {/* <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-all" />
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white">CSS</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl tracking-tight">The CSS Maverick</h1>
            </div> */}
            <div className="flex flex-col justify-center items-center gap-">
              <div className="text-lg ">
                <span className="font-semibold">the</span>
                <span className="font-black text-primary">CSS</span>
              </div>
              <div className="font-light -mt-2">maverick</div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              Tools
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#collections"
              className="text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#blog"
              className="text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#about"
              className="text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full hover:bg-primary/10 transition-all"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              onClick={handleSuggestTool}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Lightbulb className="h-4 w-4 mr-2" />
              Suggest Tool
            </Button>
          </div>
        </div>
        <Dialog open={suggestDialogOpen} onOpenChange={setSuggestDialogOpen}>
          <DialogContent className="glass-card">
            <DialogHeader>
              <DialogTitle>Suggest a CSS Tool</DialogTitle>
              <DialogDescription>
                Have an idea for a CSS tool that would make your workflow
                easier? Let us know!
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="suggestion">Your Tool Idea</Label>
                <Textarea
                  id="suggestion"
                  placeholder="E.g., A tool to generate CSS animations..."
                  value={toolSuggestion}
                  onChange={(e) => setToolSuggestion(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
              <Button
                onClick={handleSubmitSuggestion}
                className="w-full bg-primary hover:bg-primary/90"
                disabled={!toolSuggestion.trim()}
              >
                Submit Suggestion
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
