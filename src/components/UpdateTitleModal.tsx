"use client"

import { useState } from "react";

interface UpdateTitleModalProps {
    initialTitle: string;
    onClose: () => void;
    onUpdate: (newTitle: string) => void;
}

export default function UpdateTitleModal({ initialTitle, onClose, onUpdate }: UpdateTitleModalProps) {
    const [title, setTitle] = useState(initialTitle);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(title);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-light text-gray-800 mb-6 uppercase tracking-wider">Update <span className="font-semibold">Title</span></h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Product Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors text-gray-800"
                        placeholder="Enter new title"
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-6 py-3 border border-gray-200 text-gray-500 text-sm font-medium hover:bg-gray-50 transition-colors uppercase tracking-widest"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors uppercase tracking-widest"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
