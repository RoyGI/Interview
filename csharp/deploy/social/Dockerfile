FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS builder
WORKDIR /app


COPY *.sln .
COPY  stylecop.json .
COPY  src ./src
COPY  test ./test/
COPY  data ./data/

# Restoring the packages
RUN dotnet restore

# Building 
WORKDIR /app/src/social/MCode.Social.Server
RUN dotnet publish -c Release -o dist

FROM mcr.microsoft.com/dotnet/core/runtime:2.2 AS runtime
EXPOSE 8080
WORKDIR /app
COPY --from=builder /app/src/Epic.Interview.Services/dist ./
ENTRYPOINT ["dotnet", "Epic.Interview.Services.dll"]
