import React from 'react';

const Articles = () => {
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h5>Blog</h5>

                    {categories.map((category, index) => (
                        <div key={index}>
                            <button className="btn btn-primary">{category}</button>
                            <hr />
                            <div className="card mb-4">
                                <img src="blog-image.jpg" className="card-img-top" alt="Blog Image" />
                                <div className="card-body">
                                    <h2 className="card-title">{category} Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl vitae aliquam tincidunt, urna nunc tincidunt nunc, id lacinia nisl nunc id nunc.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;