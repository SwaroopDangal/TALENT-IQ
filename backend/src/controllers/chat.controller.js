import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    // ensure userId is a string
    const token = chatClient.createToken(req.user.clerKId);
    res.status(200).json({
      token,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image,
    });
  } catch (error) {
    console.error("Error generating Stream token:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
