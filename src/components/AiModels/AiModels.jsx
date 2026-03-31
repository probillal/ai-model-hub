import React, { use } from "react";
import AiModelCard from "../AiModelCard/AiModelCard";

const AiModels = ({ modelPromise }) => {
  const models = use(modelPromise);
  console.log(models);
  return (
    <div className=" py-8 md:py-20">
      <div className=" text-center space-y-2">
        <h1 className="text-5xl font-bold">Choose Your AI Model</h1>
        <p>One subscription gives you access to all frontier AI models</p>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-16">
        {models.map((model) => (
          <AiModelCard key={model.id} model={model}></AiModelCard>
        ))}
      </div>
    </div>
  );
};

export default AiModels;
