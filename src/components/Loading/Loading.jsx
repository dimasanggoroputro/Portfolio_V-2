import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
  }, [navigate]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-Putih text-center relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-Hiaju via-Abu to-kuning opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Rotating cube animation */}
      <motion.div
        className="w-16 h-16 border-4 border-Putih rounded-md absolute top-1/3 animate-spin"
        style={{ animationDuration: "2s" }}
      />

      {/* Text animation */}
      <motion.h1
        className="text-Putih text-4xl font-bold mt-20 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {loading ? "Welcome to My Portfolio" : "Loading Complete"}
      </motion.h1>

      {/* Loading bar animation */}
      <motion.div
        className="absolute bottom-10 w-1/2 h-1 bg-Putih rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}
