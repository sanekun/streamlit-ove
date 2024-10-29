import os
import streamlit.components.v1 as components

_RELEASE = False # toggle to develop mode or release mode

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _custom_component = components.declare_component(
        "streamlit-ove",
        path=build_dir
    )
else:
    _custom_component = components.declare_component(
        "streamlit-ove",
        url="http://localhost:3001"
    )

def streamlit_ove(key=None, height=500):
    st_editorjs = _custom_component(key=key, height=height)
    return st_editorjs

if not _RELEASE:
    import streamlit as st

    content = streamlit_ove(key='test', height=500)

    if st.button("Get data"):
        st.write(content)