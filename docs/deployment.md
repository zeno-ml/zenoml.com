# Deployment

Zeno can be hosted on any web server such as AWS EC2 or Google Cloud.

## Hugging Face Spaces

You can also make use of 🤗's [Docker Spaces](https://huggingface.co/docs/hub/spaces-sdks-docker) to host your project. See an example [here](https://huggingface.co/spaces/zeno-ml/diffusiondb).

1. Create a new Docker Space on Hugging Face following [these instructions](https://huggingface.co/docs/hub/spaces-sdks-docker-first-demo)
2. Clone the repository and copy the files from the [example-huggingface-spaces](https://github.com/zeno-ml/example-huggingface-spaces) repository into it.
3. Edit the `config.toml` file for your Zeno setup.
4. Test your setup locally with `zeno config.toml`
5. Add, commit, and push the changes!
